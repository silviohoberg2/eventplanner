import { useState } from "react";

function PriceCalculator() {
  const [price, setPrice] = useState(100);
  const [quantity, setQuantity] = useState(2);
  const [discount, setDiscount] = useState(10);

  const subtotal = price * quantity;
  const discountAmount = subtotal * (discount / 100);
  const totalBeforeShipping = subtotal - discountAmount;

  const shipping = totalBeforeShipping >= 50 ? 0 : 4.99;

  const total = totalBeforeShipping + shipping;

  return (
    <div>
      <h2>Preisrechner</h2>

      <div>
        <label>
          Einzelpreis{" "}
          <input
            type="number"
            value={price}
            onChange={(event) =>
              setPrice(Number(event.target.value))
            }
          />
          {" "}€
        </label>
      </div>

      <div>
        <label>
          Menge{" "}
          <input
            type="number"
            value={quantity}
            onChange={(event) =>
              setQuantity(Number(event.target.value))
            }
          />
          {" "}Stück
        </label>
      </div>

      <div>
        <label>
          Rabatt{" "}
          <select
            value={discount}
            onChange={(event) =>
              setDiscount(Number(event.target.value))
            }
          >
            <option value="0">0 %</option>
            <option value="10">10 %</option>
            <option value="20">20 %</option>
          </select>
        </label>
      </div>

      <p>
        Zwischensumme: {subtotal.toFixed(2)} €
      </p>

      <p>
        Rabatt: {discountAmount.toFixed(2)} €
      </p>

      <p>
        Gesamt vor Versand: {totalBeforeShipping.toFixed(2)} €
      </p>

      <p>
        Versand:{" "}
        {shipping === 0
          ? "Kostenlos"
          : `${shipping.toFixed(2)} €`}
      </p>

      <p>
        Gesamt: {total.toFixed(2)} €
      </p>
    </div>
  );
}

export default PriceCalculator;