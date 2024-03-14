import useSWR from "swr";

export default function ProductForm() {
  const { mutate } = useSWR("/api/products");

  async function handleSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const productData = Object.fromEntries(formData);

    const response = await fetch("/api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productData),
    });
    if (response.ok) {
      mutate();
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1>Add a new Fish</h1>
      <label htmlFor="name">
        Name:
        <input type="text" id="name" name="name" />
      </label>
      <label htmlFor="description">
        Description:
        <input type="text" id="description" name="description" />
      </label>
      <label htmlFor="price">
        Price:
        <input type="number" id="price" name="price" min="0" />
      </label>
      <label htmlFor="currency">
        Currency:
        <select id="currency" name="currency">
          <option value="EUR">EUR</option>
          <option value="USD">USD</option>
          <option value="GBP">GBP</option>
        </select>
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}
