import React from "react";
import Card from "../components/cards/Card";

function Buillon() {
  return (
    <div>
      <Card />
      <div className="p-4 tabs">
        <button className="tab tab-lifted">Tab 1</button>
        <button className="tab tab-lifted tab-active">Tab 2</button>
        <button className="tab tab-lifted">Tab 3</button>
      </div>
      <div class="p-4">
        <input type="checkbox" class="toggle toggle-primary" />
        <input type="checkbox" class="toggle toggle-secondary" />
        <input type="checkbox" class="toggle toggle-accent" />
      </div>
      <div class="card shadow-2xl w-80 m-4">
        <figure>
          <img src="https://picsum.photos/id/1005/500/250" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">DaisyUI Card</h2>
          <p>
            Rerum reiciendis beatae tenetur excepturi aut pariatur est eos. Sit
            sit necessitatibus.
          </p>
        </div>
      </div>
      <div class="dropdown m-4">
        <div tabindex="0" class="m-1 btn">
          Dropdown
        </div>
        <ul
          tabindex="0"
          class="p-2 menu dropdown-content bg-neutral text-neutral-content rounded-box w-52"
        >
          <li>
            <a>Item 1</a>
          </li>
          <li>
            <a>Item 2</a>
          </li>
        </ul>
      </div>
      <div className="">
        <button data-theme="mytheme" class="btn color-secondary">
          Button
        </button>
        <button class="btn btn-primary">One</button>
        <button class="btn btn-secondary">Two</button>
        <button class="btn btn-accent btn-outline">Three</button>
      </div>
      <article class="prose">
        <h1>Garlic bread with cheese: What the science tells us</h1>
        <p>
          For years parents have espoused the health benefits of eating garlic
          bread with cheese to their children, with the food earning such an
          iconic status in our culture that kids will often dress up as warm,
          cheesy loaf for Halloween.
        </p>
        <p>
          But a recent study shows that the celebrated appetizer may be linked
          to a series of rabies cases springing up around the country.
        </p>
      </article>
    </div>
  );
}

export default Buillon;
