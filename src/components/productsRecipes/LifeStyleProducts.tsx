import React from "react";

type Category = {
  title: string;
  description: string;
  bgColor: string;
  icon: React.ReactElement;
};

const categories: Category[] = [
  {
    title: "Gluten-Free",
    description: "Foods that don't contain gluten",

    bgColor: "bg-warning-subtle",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="76"
        height="76"
        viewBox="0 0 76 76"
        fill="none"
      >
        <path
          d="M62.631 13.369l-7.214 7.214M20.583 55.417l-7.214 7.214M38 51.037c0-11.315-13.926-11.315-13.926-11.315s0 13.926 11.315 13.926H38"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Vegan",
    description: "Vegetable based goodness",

    bgColor: "bg-success-subtle",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="76"
        height="76"
        viewBox="0 0 76 76"
        fill="none"
      >
        <g stroke="currentColor" strokeWidth="2.5" strokeMiterlimit="10">
          <path
            d="M16.842 37.347c5.205 6.789 12.251 18.802 12.251 36.436h17.812c0-17.634 7.066-29.648 12.251-36.436"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </svg>
    ),
  },
  {
    title: "Plant based",
    description: "Based on herbal ingredients",

    bgColor: "bg-info-subtle",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="76"
        height="76"
        viewBox="0 0 76 76"
        fill="none"
      >
        <g stroke="currentColor" strokeWidth="2.5" strokeMiterlimit="10">
          <path
            d="M11.1264 58.4427C7.13273 49.8272 -11.3834 1.3653 66.3117 6.74996C67.4008 6.74996 68.49 7.82689 68.8531 8.90382C70.6684 18.9552 74.6621 64.1863 13.6678 59.8786C12.2156 59.8786 11.4895 59.5196 11.1264 58.4427Z"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </svg>
    ),
  },
  {
    title: "Keto",
    description: "Good fats served in food",

    bgColor: "bg-danger-subtle",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="76"
        height="76"
        viewBox="0 0 76 76"
        fill="none"
      >
        <g stroke="currentColor" strokeWidth="2.5" strokeMiterlimit="10">
          <path
            d="M58.59 33.535c-2.219-3.028-3.595-6.515-4.043-10.133-1.227-9.91-7.437-16.42-6.862-15.718-4.878-5.956-14.1-6.035-19.083-.163-4.128 4.863-6.442 10.345-7.191 16.12-.454 3.502-1.759 6.871-3.919 9.785-3.034 4.093-4.824 9.13-4.824 14.577 0 13.7 11.607 24.962 25.584 24.829 13.876-.132 25.083-11.198 25.083-24.829 0-5.399-1.758-10.395-4.744-14.469z"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </svg>
    ),
  },
];

const LifeStyleProducts: React.FC = () => {
  return (
    <section className="container pb-5 mb-2 mb-sm-3 mb-lg-4 mb-xl-5">
      <h2 className="h3 text-center pb-1 pb-sm-2 pb-md-3 pb-lg-0 mb-4 mb-lg-5">
        Shop by lifestyle
      </h2>
      <div className="row justify-content-center">
        {categories.map((category, index) => (
          <div
            key={index}
            className="col-12 col-sm-6 col-md-6 col-lg-3 d-flex flex-column align-items-center text-center"
          >
            <div
              className={`d-flex justify-content-center align-items-center ${category.bgColor} rounded-circle mb-3`}
              style={{
                width: "120px",
                height: "120px",
                borderRadius: "50%",
              }}
            >
              {category.icon}
            </div>
            <h3 className="h5 mb-2">
              <a className="animate-underline stretched-link">
                <span className="animate-target">{category.title}</span>
              </a>
            </h3>
            <p className="fs-sm mb-0">{category.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LifeStyleProducts;
