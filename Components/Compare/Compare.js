import Image from "next/image";
import { useEffect, useState } from "react";
import Alertbox from "../Alertbox/AlertBox";

function Compare({ compare }) {
  const [disabled, setDisabled] = useState(true);
  const validCompare = compare.player1 !== null && compare.player2 !== null;
  function handleCompare(prop) {
    console.log(prop.player2);
  }

  useEffect(() => {
    if (compare.player2 !== undefined && compare.player2 !== null) {
      setDisabled(false);
    }
  }, [compare, disabled]);

  return (
    <section>
      <div className="card-comapre">
        {validCompare ? (
          <div className="card-comapreDone">
            <div>
              <p>{compare.player1.name}</p>
              <div>
                <label>HP: {compare.player1.hp} </label>
                <label
                  className={`${
                    compare.player1.hp - compare.player2.hp > 0
                      ? "compared-up"
                      : "compared-down"
                  }`}
                >
                  {compare.player1.hp - compare.player2.hp}
                </label>
              </div>
              <div>
                <label>ATA: {compare.player1.atk} </label>
                <label
                  className={`${
                    compare.player1.atk - compare.player2.atk > 0
                      ? "compared-up"
                      : "compared-down"
                  }`}
                >
                  {compare.player1.atk - compare.player2.atk}
                </label>
              </div>
              <div>
                <label>DEF: {compare.player1.def} </label>
                <label
                  className={`${
                    compare.player1.def - compare.player2.def > 0
                      ? "compared-up"
                      : "compared-down"
                  }`}
                >
                  {compare.player1.def - compare.player2.def}
                </label>
              </div>
              <div>
                <label>VEL: {compare.player1.speed} </label>
                <label
                  className={`${
                    compare.player1.speed - compare.player2.speed > 0
                      ? "compared-up"
                      : "compared-down"
                  }`}
                >
                  {compare.player1.speed - compare.player2.speed}
                </label>
              </div>
              <div>
                <label>Media: </label>
                <label>
                  {compare.player1.hp +
                    compare.player1.atk +
                    compare.player1.def +
                    compare.player1.speed * 4}
                </label>
              </div>
            </div>

            <div>
              <p>{compare.player2.name}</p>
              <div>
                <label>HP: {compare.player2.hp} / </label>
                <label
                  className={`${
                    compare.player2.hp - compare.player1.hp > 0
                      ? "compared-up"
                      : "compared-down"
                  }`}
                >
                  {compare.player2.hp - compare.player1.hp}
                </label>
              </div>
              <div>
                <label>ATA: {compare.player2.atk} / </label>
                <label
                  className={`${
                    compare.player2.atk - compare.player1.atk > 0
                      ? "compared-up"
                      : "compared-down"
                  }`}
                >
                  {compare.player2.atk - compare.player1.atk}
                </label>
              </div>
              <div>
                <label>DEF: {compare.player2.def} / </label>
                <label
                  className={`${
                    compare.player2.def - compare.player1.def > 0
                      ? "compared-up"
                      : "compared-down"
                  }`}
                >
                  {compare.player2.def - compare.player1.def}
                </label>
              </div>
              <div>
                <label>VEL: {compare.player2.speed} / </label>
                <label
                  className={`${
                    compare.player2.speed - compare.player1.speed > 0
                      ? "compared-up"
                      : "compared-down"
                  }`}
                >
                  {compare.player2.speed - compare.player1.speed}
                </label>
              </div>
              <div>
                <label>Media: </label>
                <label>
                  {compare.player2.hp +
                    compare.player2.atk +
                    compare.player2.def +
                    compare.player2.speed * 4}
                </label>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}

        <div>{compare.player1 != null ? compare.player1.name : "="}</div>
        <button
          className="btn-compare"
          disabled={disabled}
          onClick={() => {
            handleCompare(compare);
          }}
        >
          <Image
            src={`/images/icon-compare.svg`}
            width={18}
            height={18}
            alt={`compare`}
          />
        </button>

        <div>{compare.player2 != null ? compare.player2.name : "="}</div>
      </div>
    </section>
  );
}

export default Compare;
