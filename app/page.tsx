import Image from "next/image";


export default function Home() {
  return (
    <div className="lmfao">
      <h1>Doxtools.io</h1>
      <p>A community focused toolset for driving value and unmasking human garbage.</p>
      
      <img src="scooby-doo-doo.png" alt="Your Name" />
      <div>
      <h2>Roadmap part 1:</h2>

      <p>Proof of concept.</p>
      <ul>
        <li>
          POC TARGET #000: <span className="IsTarget">Kimbo/Ulva</span>
        </li>
      </ul>

      <h2>Roadmap part 2:</h2>
      <p>PRESALE OF $DOX</p>
      <ul>
        <li>
          PRESALE INFO PENDING AFTER POC STEP.
        </li>
      </ul>

      <h2>Roadmap part 3:</h2>
      <p>FIRST COMMUNITY TARGET</p>
      <ul>
      <li>
          COMMUNITY TARGET #001: Unkown
        </li>
        <li>
        TARGET RECOMMENDATION: <a href="https://twitter.com/WhaleFUD"><span className="IsTarget">@WHALEFUD</span></a>
        </li>
      </ul>
    </div>
    </div>
  );
}
