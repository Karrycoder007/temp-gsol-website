import Footer from "@/components/Footer";
import React from "react";

interface Product {
  name: string;
  image: string;
  description: string;
  price: string;
}

const products: Product[] = [
  {
    name: "Areca Plate",
    image: "https://m.media-amazon.com/images/I/71Gi+ZwPamL.jpg", // Replace with actual image path
    description:
      "Eco-friendly and disposable areca plates perfect for all types of meals.",
    price: "$10 for 25 plates",
  },
  {
    name: "Areca Cup",
    image:
      "https://rukminim2.flixcart.com/image/850/1000/kfikya80/cup-saucer/p/h/j/areca-leaf-cup-tea-cup-catalyst-natural-original-imafvytdgyaed7yg.jpeg?q=90&crop=false", // Replace with actual image path
    description:
      "Durable and biodegradable areca cups ideal for both hot and cold beverages.",
    price: "$8 for 50 cups",
  },
  {
    name: "Areca Spoon",
    image:
      "https://www.jiomart.com/images/product/original/rvxvonr3fw/see-inside-disposable-wooden-spoons-25-pcs-amp-wooden-forks-25-pcs-areca-palm-leaf-disposable-wooden-cutlery-set-pack-of-50-product-images-orvxvonr3fw-p605533333-1-202310092356.jpg?im=Resize=(420,420)", // Replace with actual image path
    description:
      "Sturdy and compostable areca spoons, great for both casual and formal dining.",
    price: "$5 for 50 spoons",
  },
  {
    name: "Areca Storage Box",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXMQwHNYdPs_Xx7sDYcZTch9ETC8xnj4AZtuICel8sckZEuAnsea6K21_ZmNikXayke2I&usqp=CAU", // Replace with actual image path
    description:
      "Stylish and sustainable areca storage boxes for organizing your essentials.",
    price: "$15 for 5 boxes",
  },
];

const Page: React.FC = () => {
  return (
    <div className=" bg-gray-300 ">
      <div className="text-center mb-10 pt-10">
        <h1 className="text-5xl font-bold mb-4">Our Biodegradable Products</h1>
        <p className="text-lg para">
          Explore our range of eco-friendly products made from areca leaves.
          They are sustainable, biodegradable, and perfect for everyday use.
        </p>
      </div>

      <div className="bg-gray-300 p-8 rounded-lg px-20">
        <h2 className="text-4xl font-bold mb-4 text-center">
          Why Choose Biodegradable Products?
        </h2>
        <p className="para text-lg mb-4">
          Using biodegradable products is a crucial step towards reducing
          plastic waste and preserving our environment. Here are some reasons
          why you should consider making the switch:
        </p>
        <ul className="list-disc list-inside space-y-2 para">
          <li>
            Biodegradable products decompose naturally, reducing landfill waste
            and pollution.
          </li>
          <li>
            They are made from sustainable materials that have a lower
            environmental impact.
          </li>
          <li>
            Using biodegradable products helps conserve natural resources and
            reduce carbon footprints.
          </li>
          <li>
            They are safe for wildlife, as they break down without releasing
            harmful toxins.
          </li>
          <li>
            Biodegradable products promote a circular economy by encouraging
            recycling and composting.
          </li>
        </ul>
        <p className="para text-lg mt-4">
          By choosing biodegradable products, you are contributing to a
          healthier planet and supporting sustainable practices. Let&apos;s work
          together to reduce plastic waste and protect our environment for
          future generations.
        </p>
      </div>

      <div className="mb-12 px-20">
        <h2 className="text-3xl font-bold mb-4 text-center">
          What is the Areca Plant?
        </h2>
        <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-8 pt-5">
          <div className="md:w-1/2 mb-4 md:mb-0">
            <img
              src="https://images.unsplash.com/photo-1529685420453-8835ca76f78b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Areca Plant"
              className="w-5/6 h-auto rounded-lg shadow-md"
            />
          </div>
          <div className="md:w-1/2 pt-5">
            <p className="text-lg mb-4 para">
              The areca plant, also known as Areca catechu, is a species of palm
              that is widely cultivated for its seeds, known as betel nuts. The
              leaves of the areca plant are sturdy, flexible, and naturally
              biodegradable, making them an excellent material for producing
              eco-friendly products.
            </p>
            <p className="text-lg mb-4 para">
              Areca leaves are harvested, cleaned, and molded into various
              shapes to create disposable plates, cups, spoons, and storage
              boxes. These products are not only sustainable but also add a
              natural aesthetic to any setting.
            </p>
            <p className="text-lg para">
              By using products made from areca leaves, we can reduce our
              dependence on plastic and contribute to a healthier environment.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 px-20">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover p-2"
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">{product.name}</h2>
              <p className="text-gray-700 mb-4 para">{product.description}</p>
              {/* <p className="text-green-600 font-bold">{product.price}</p> */}
            </div>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default Page;
