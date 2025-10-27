import API from "../_api";

export const getBooks = async () => {
    const { data } = await API.get("/books");
    return data.data;
}

export const CreateBook = async (formData) => {
    try {
        const response = await API.post("/books", formData);
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export const showBook = async (id) => {
  try {
    const { data } = await API.get(`/books/${id}`);
    return data.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export const updateBook = async (id, formData) => {
  try {
    // Note: API.post for update might be correct if using method spoofing (e.g., _method: "PUT" in formData)
    // If your backend expects a true PUT/PATCH, you might need API.put() or API.patch()
    const response = await API.post(`/books/${id}`, formData); 
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export const deleteBook = async (id) => {
  try {
    await API.delete(`/books/${id}`);
  } catch (error) {
    console.log(error);
    throw error;
  }
}