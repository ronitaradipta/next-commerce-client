const formatRupiah = (number) => {
  const rupiah = number.toLocaleString("id-ID", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
    currency: "IDR",
  });

  return `Rp.${rupiah}`;
};

export default formatRupiah;
