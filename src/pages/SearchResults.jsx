import { useEffect, useState } from "react";
import callApi from "../services/callApi";
import { useNavigate, useLocation } from "react-router-dom";
import CardProduct from "../components/homepage/element/CardProduct";
import SelectElement from "../components/SearchResults/SelectElement";
import Pagination from "../components/SearchResults/ProductPagination";
import CheckBoxElement from "../components/SearchResults/CheckBoxElement";
import ProductRecommendations from "../components/homepage/ProductRecommendations";

const SearchResults = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isRun, setIsRun] = useState(false);
  const [categories, setCategories] = useState([]);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [searchProducts, setSearchProducts] = useState([]);
  const [filter, setFilter] = useState({ search: "", category: "", city: [], minPrice: "", maxPrice: "", minRating: "" });
  const [paginate, setPaginate] = useState({ dataPerPage: "", totalPages: "", totalProducts: "", currentPage: 1, offset: "" });

  // 1. get and set filter search for fetching data from URL parameters
  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const search = queryParams.get("search") || "";
    const category = queryParams.get("category") || "";
    const minPrice = queryParams.get("minPrice") || "";
    const maxPrice = queryParams.get("maxPrice") || "";
    const minRating = queryParams.get("minRating") || "";
    const currentPage = queryParams.get("minRating") || "";
    const citiesString = queryParams.get("city") || "";
    const city = citiesString !== "" ? citiesString.split(",") : "";
    setPaginate({ currentPage });
    setFilter({ search, category, city, minPrice, maxPrice, minRating });
    fetchSearchResults(queryParams.toString());
  }, [location.search]);

  //  2. Fetch data from url search parameters
  const fetchSearchResults = async (newUrl) => {
    setIsLoading(true);
    try {
      const [categoryResponse, productResponse] = await Promise.all([callApi.get("/categories"), callApi.get(`/products?${newUrl}`)]);
      setCategories(categoryResponse.data.data);
      if (productResponse) {
        const result = productResponse.data;
        setPaginate({
          offset: result.offset,
          totalPages: result.totalPages,
          currentPage: result.currentPage,
          dataPerPage: result.dataPerPage,
          totalProducts: result.totalProducts,
        });
        setIsSuccess(true);
        setSearchProducts(result.data);
      }
    } catch (error) {
      console.error(error);
      setIsSuccess(false);
    } finally {
      setIsLoading(false);
    }
  };

  // 3. handle change to the filter search parameters
  const handleFilter = ({ target: { name, value, checked } }) => {
    try {
      switch (name) {
        case "minPrice":
          setFilter({ ...filter, minPrice: value });
          break;
        case "maxPrice":
          setFilter({ ...filter, maxPrice: value });
          break;
        case "category":
          setFilter({ ...filter, category: value });
          break;
        case "minRating":
          setFilter({ ...filter, minRating: checked ? value : "" });
          break;
        case "city":
          updateCityFilter(value);
          break;
        default:
          console.error(`Unknown filter property: ${name}`);
      }
      setIsRun(true);
    } catch (error) {
      console.error(error);
    }
  };

  //4. update filter search for multiple cities parameter
  const updateCityFilter = (selectedCity) => {
    const index = filter.city.indexOf(selectedCity);
    const updatedCity = [...filter.city];
    if (index > -1) {
      updatedCity.splice(index, 1);
    } else {
      updatedCity.push(selectedCity);
    }
    setFilter({ ...filter, city: updatedCity });
  };

  // 5. update pagination once the parameter change or move onto another page
  const paginateHandler = (pageNumber) => {
    setPaginate({ ...paginate, currentPage: pageNumber });
    window.scrollTo(0, 0);
    setIsRun(true);
  };

  // 6. Update URL search parameters and navigate to URL
  const setUrlParams = () => {
    const searchParams = new URLSearchParams();
    if (filter.city.length !== 0) searchParams.set("city", filter.city);
    if (filter.search !== "") searchParams.set("search", filter.search);
    if (paginate.currentPage) searchParams.set("page", paginate.currentPage);
    if (filter.category !== "") searchParams.set("category", filter.category);
    if (filter.minPrice !== "") searchParams.set("minPrice", filter.minPrice);
    if (filter.maxPrice !== "") searchParams.set("maxPrice", filter.maxPrice);
    if (filter.minRating !== "") searchParams.set("minRating", filter.minRating);

    setIsRun(false);
    const queryString = searchParams.toString();
    navigate(`${location.pathname}?${queryString}`);
  };
  useEffect(() => {
    if (isRun) {
      setUrlParams();
    }
  }, [isRun, filter]);
  return (
    <div className="bg-gray-100">
      <div className="flex flex-wrap px-5 py-5 mx-auto ">
        <div className="w-full md:w-[20%] mb-5">
          <h2>Filter</h2>
          <div className="bg-white shadow-md rounded-lg p-4 mt-4">
            <div>
              <h3 className="font-semibold mb-3">Pilih Kategori</h3>
              <SelectElement data={categories} handleFilter={handleFilter} value={filter.category} />
            </div>
            <div className="mt-3">
              <h3 className="font-semibold">Lokasi</h3>
              <CheckBoxElement name="city" value="jakarta" handleFilter={handleFilter} checked={filter.city.includes("jakarta")} />
              <CheckBoxElement name="city" value="surabaya" handleFilter={handleFilter} checked={filter.city.includes("surabaya")} />
              <CheckBoxElement name="city" value="medan" handleFilter={handleFilter} checked={filter.city.includes("medan")} />
              <CheckBoxElement name="city" value="bandung" handleFilter={handleFilter} checked={filter.city.includes("bandung")} />
              <CheckBoxElement name="city" value="tangerang" handleFilter={handleFilter} checked={filter.city.includes("tangerang")} />
              <button className="text-emerald-500 text-sm font-medium">Lihat Selengkapnya</button>
            </div>

            <div className="mt-4 flex flex-col">
              <h3 className="font-semibold">Harga</h3>
              <input type="text" name="minPrice" value={filter.minPrice} onChange={handleFilter} placeholder="min price" className="border border-gray-300 rounded-md p-2 mt-3" />
              <input type="text" name="maxPrice" value={filter.maxPrice} onChange={handleFilter} placeholder="max price" className="border border-gray-300 rounded-md p-2 mt-3" />
            </div>
            <div className="mt-4">
              <h3 className="font-semibold">Rating</h3>
              <div className="flex items-center mt-3 mb-4">
                <input type="checkbox" name="minRating" value="4" onChange={handleFilter} />
                <label htmlFor="minRating" className="ml-2 text-sm font-medium text-gray-900">
                  4 keatas
                </label>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-[80%] pl-0 md:pl-5">
          <h2> Pencarian : </h2>
          {!isSuccess && !isLoading ? (
            <div>
              <div className="flex w-full mt-4 p-5 rounded-md bg-white shadow-lg ">
                <div className="w-[25%]">
                  <img src="" alt="" />
                </div>
                <div className="flex flex-col w=[75%] gap-2">
                  <div className="font-bold text-lg">Oopps, produk yang kamu cari tidak tersedia</div>
                  <div>Coba masukkan keyword berbeda :</div>
                  <div>
                    <button className="bg-green-500 py-2 px-5 rounded border text-white font-semibold">Ubah Keywords</button>
                  </div>
                </div>
              </div>
              <ProductRecommendations />
            </div>
          ) : !isLoading && isSuccess ? (
            <div>
              <div className="mt-5">
                Menampilkan{" "}
                <span className="font-bold">
                  {paginate.offset + 1} dari {Math.min(paginate.offset + paginate.dataPerPage, paginate.totalProducts)}
                </span>{" "}
                produk untuk hasil pencarian <span className="font-bold">"{filter.search}"</span> dari total <span className="font-bold">"{paginate.totalProducts} produk tersedia"</span>
              </div>
              <div className="flex flex-wrap ">
                {searchProducts.map((data, index) => {
                  const productIndex = paginate.offset + index + 1;
                  if (productIndex > paginate.totalProducts) {
                    return null;
                  }
                  return <CardProduct data={data} key={data.id} />;
                })}
              </div>
              <div className="flex justify-center mt-5">
                <Pagination currentPage={paginate.currentPage} totalPages={paginate.totalPages} paginate={paginateHandler} />
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
