import "./FirstPage.css";
const FirstPage = () => {
  return (
    <div>
      <div className="container  mt-2 mt-lg-5">
        <div className="img-container ">
          <img
            src="https://soumya190.github.io/Mobile-first-solution-using-CSS-Grid-and-Flexbox/image-omelette.jpg"
            className="rounded-4 w-full img-fluid"
            alt=""
          />
        </div>
        <div className="content">
          <h2 className="fw-bold mt-3">Simple Omelette Reciepe</h2>
          <p>
            An easy and quick perfect for any meal. This classic omelette
            ctxnbines beaten eggs cooked to perfection. optionally wvth yaour
            choice of chew. vegetables or meats
          </p>

          <div className="preparation-time p-3  rounded-3 background">
            <h5 className="preparation-heading fw-bold">Preparation Time</h5>
            <ul className="no-decoration">
              <li className="ps-3">
                <span className="fw-bold">Total</span>:Approximately 10min
              </li>
              <li className="ps-3">
                <span className="fw-bold">Preparation</span>:5min
              </li>
              <li className="ps-3">
                <span className="fw-bold">Cooking</span>:5min
              </li>
            </ul>
          </div>
          <div className="Ingredients-container mt-3">
            <h3 className="heading">Ingredients</h3>
            <div className="ingredients-content container">
              <ul className="no-decoration">
                <li className="ps-3">2-3 large eggs</li>
                <li className="ps-3">Salt to taste</li>
                <li className="ps-3">Pepper to taste</li>
                <li className="ps-3">1 tbspn of butter or oil</li>
                <li className="ps-3">
                  Optional fillings: cheese, diced vegetables, cooked meats,
                  herbs
                </li>
              </ul>
            </div>
          </div>
          <div className="breaker"></div>
          <div className="Instructions-container mt-3">
            <h3 className="fw-bold heading">Instructions</h3>
            <ul className="instructions-list">
              <li className="">
                <span className="fw-bold">Beat the eggs:</span> In a bowl, beat
                the eggs With a pinch Of salt and pepper until they are well
                mixed. You can add a tablespoon of water or milk for a fluffer
                texture.
              </li>
              <li className="">
                <span className="fw-bold"> Heat the pan:</span> Place a
                non-stick frying pan over medium heat and add butter or Oil.
              </li>
              <li className="">
                <span className="fw-bold"> Cook the omelette:</span>Once the
                butter is melted and bubbling, pour in the eggs. Tilt the pan to
                ensure the eggs evenly coat the surface.
              </li>
              <li className="">
                <span className="fw-bold"> Add fillings (optional):</span> When
                the eggs begin to set at the edges but are still slightly runny
                in the middle. sprinkle your chosen fillings over one half of
                the omelette.
              </li>
              <li className="">
                <span className="fw-bold">Fold and serve:</span> AS the omelette
                continues to cook, carefully lift one edge and fold it over the
                fillings. Let it cook for another minute, then slide it onto a
                plate.
              </li>
              <li className="">
                <span className="fw-bold"> Enjoy:</span> Serve hot. with
                additional salt and pepper if needed.
              </li>
            </ul>
          </div>
          <div className="breaker"></div>
          <div className="nutrition-container  my-3">
            <h3 className="heading">Nutrition</h3>
            <p>
              The table below shows nutritional values per serving without the
              additional fillings.
            </p>
            <table className="table  ">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="fw-bold "
                    style={{ color: "brown" }}
                  >
                    Calories
                  </th>
                  <th
                    scope="col"
                    className="fw-bold heading"
                    style={{ color: "brown" }}
                  >
                    227kcal
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th
                    scope="row"
                    className="fw-light"
                    style={{ color: "brown" }}
                  >
                    Carbs
                  </th>
                  <td className="fw-bold" style={{ color: "brown" }}>
                    0g
                  </td>
                </tr>
                <tr>
                  <th
                    scope="row"
                    className="fw-light"
                    style={{ color: "brown" }}
                  >
                    Protein
                  </th>
                  <td className="fw-bold" style={{ color: "brown" }}>
                    20g
                  </td>
                </tr>
                <tr>
                  <th
                    scope="row"
                    className="fw-light"
                    style={{ color: "brown" }}
                  >
                    Fat
                  </th>
                  <td className="fw-bold" style={{ color: "brown" }}>
                    22g
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstPage;
