import { useState } from "react";

function RecipeForm() {
  const [formData, setFormData] = useState({
    recipeName: "",
    chefName: "",
    price: "",
    prepTime: "",
    image: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    // Next lecture
    // We will add this recipe into state
  };

  return (
    <aside className="w-full lg:w-[35%]">
      <div className="bg-white p-6 rounded-2xl shadow-lg sticky top-28">

        <h2 className="text-3xl font-bold mb-2">
          Add New Recipe
        </h2>

        <p className="text-gray-500 mb-6">
          Share your delicious recipe with everyone.
        </p>

        <form
          className="space-y-4"
        >

          {/* Recipe Name */}

          <div>
            <label className="block mb-2 font-medium">
              Recipe Name
            </label>

            <input
              type="text"
              name="recipeName"
              placeholder="Recipe Name"
              className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          {/* Chef Name */}

          <div>
            <label className="block mb-2 font-medium">
              Chef Name
            </label>

            <input
              type="text"
              name="chefName"
              placeholder="Chef Name"
              className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          {/* Price + Time */}

          <div className="grid grid-cols-2 gap-4">

            <div>
              <label className="block mb-2 font-medium">
                Price
              </label>

              <input
                type="number"
                name="price"
                placeholder="Price"
                className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">
                Prep Time
              </label>

              <input
                type="text"
                name="prepTime"
                placeholder="30 mins"
                className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>

          </div>

          {/* Image */}

          <div>
            <label className="block mb-2 font-medium">
              Image URL
            </label>

            <input
              type="text"
              name="image"
              placeholder="Paste Image URL"
              className="w-full border rounded-lg p-3 outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          {/* Description */}

          <div>

            <label className="block mb-2 font-medium">
              Description
            </label>

            <textarea
              rows="4"
              name="description"
              placeholder="Description..."
              className="w-full border rounded-lg p-3 outline-none resize-none focus:ring-2 focus:ring-orange-500"
            />

          </div>

          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold transition"
          >
            Create Recipe
          </button>

        </form>
      </div>
    </aside>
  );
}

export default RecipeForm;