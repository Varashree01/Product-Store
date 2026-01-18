import { create } from "zustand";

export const useProductStore = create((set) => ({
  products: [],

  /* FETCH */
  fetchProducts: async () => {
    const res = await fetch("http://localhost:5000/api/products");
    const data = await res.json();
    set({ products: data.data });
  },

  /* CREATE */
  createProduct: async (newProduct) => {
    if (!newProduct.name || !newProduct.price || !newProduct.image) {
      return { success: false, message: "Please fill all fields" };
    }

    const res = await fetch("http://localhost:5000/api/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...newProduct,
        price: Number(newProduct.price),
      }),
    });

    const data = await res.json();

    set((state) => ({
      products: [...state.products, data.data],
    }));

    return { success: true, message: "Product created successfully" };
  },

  /* DELETE */
  deleteProduct: async (pid) => {
    await fetch(`http://localhost:5000/api/products/${pid}`, {
      method: "DELETE",
    });

    set((state) => ({
      products: state.products.filter((p) => p._id !== pid),
    }));
  },

  /* ✅ UPDATE */
  updateProduct: async (pid, updatedProduct) => {
    const res = await fetch(`http://localhost:5000/api/products/${pid}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedProduct),
    });

    const data = await res.json();

    set((state) => ({
      products: state.products.map((p) =>
        p._id === pid ? data.data : p
      ),
    }));

    return { success: true };
  },
}));