import { Container, AnimalsList, Animals } from "./styles";
import { useState, useEffect } from "react";


function Home() {
  const { animal, setAnimais } = useState([]);

  useEffect(() => {
    fetch('https://zoo-animal-api.herokuapp.com/animals/rand')
      .then(response => response.json())
      .then(data => setAnimais(data.results))
  }, [])

  return (
    <Container>
      <h1>Kangaroo's Zoo</h1>
      <AnimalsList>
        <Animals>
          <a href="https://www.google.com/">
            {" "}
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/A364%2C_Lone_Pine_Koala_Sanctuary%2C_Queensland%2C_Australia%2C_koala%2C_2007.png/170px-A364%2C_Lone_Pine_Koala_Sanctuary%2C_Queensland%2C_Australia%2C_koala%2C_2007.png"
              alt="Spider man"
            />{" "}
          </a>
          <span>Kangaroo</span>
        </Animals>

        <Animals>
          <a href="https://www.google.com/">
            {" "}
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/A364%2C_Lone_Pine_Koala_Sanctuary%2C_Queensland%2C_Australia%2C_koala%2C_2007.png/170px-A364%2C_Lone_Pine_Koala_Sanctuary%2C_Queensland%2C_Australia%2C_koala%2C_2007.png"
              alt="Spider man"
            />{" "}
          </a>
          <span>Kangaroo</span>
        </Animals>

        <Animals>
          <a href="https://www.google.com/">
            {" "}
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/A364%2C_Lone_Pine_Koala_Sanctuary%2C_Queensland%2C_Australia%2C_koala%2C_2007.png/170px-A364%2C_Lone_Pine_Koala_Sanctuary%2C_Queensland%2C_Australia%2C_koala%2C_2007.png"
              alt="Spider man"
            />{" "}
          </a>
          <span>Kangaroo</span>
        </Animals>

        <Animals>
          <a href="https://www.google.com/">
            {" "}
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/A364%2C_Lone_Pine_Koala_Sanctuary%2C_Queensland%2C_Australia%2C_koala%2C_2007.png/170px-A364%2C_Lone_Pine_Koala_Sanctuary%2C_Queensland%2C_Australia%2C_koala%2C_2007.png"
              alt="Spider man"
            />{" "}
          </a>
          <span>Kangaroo</span>
        </Animals>

        <Animals>
          <a href="https://www.google.com/">
            {" "}
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/A364%2C_Lone_Pine_Koala_Sanctuary%2C_Queensland%2C_Australia%2C_koala%2C_2007.png/170px-A364%2C_Lone_Pine_Koala_Sanctuary%2C_Queensland%2C_Australia%2C_koala%2C_2007.png"
              alt="Spider man"
            />{" "}
          </a>
          <span>Kangaroo</span>
        </Animals>

        <Animals>
          <a href="https://www.google.com/">
            {" "}
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/A364%2C_Lone_Pine_Koala_Sanctuary%2C_Queensland%2C_Australia%2C_koala%2C_2007.png/170px-A364%2C_Lone_Pine_Koala_Sanctuary%2C_Queensland%2C_Australia%2C_koala%2C_2007.png"
              alt="Spider man"
            />{" "}
          </a>
          <span>Kangaroo</span>
        </Animals>

        <Animals>
          <a href="https://www.google.com/">
            {" "}
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/A364%2C_Lone_Pine_Koala_Sanctuary%2C_Queensland%2C_Australia%2C_koala%2C_2007.png/170px-A364%2C_Lone_Pine_Koala_Sanctuary%2C_Queensland%2C_Australia%2C_koala%2C_2007.png"
              alt="Spider man"
            />{" "}
          </a>
          <span>Kangaroo</span>
        </Animals>

        <Animals>
          <a href="https://www.google.com/">
            {" "}
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/A364%2C_Lone_Pine_Koala_Sanctuary%2C_Queensland%2C_Australia%2C_koala%2C_2007.png/170px-A364%2C_Lone_Pine_Koala_Sanctuary%2C_Queensland%2C_Australia%2C_koala%2C_2007.png"
              alt="Spider man"
            />{" "}
          </a>
          <span>Kangaroo</span>
        </Animals>

        <Animals>
          <a href="https://www.google.com/">
            {" "}
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/01/A364%2C_Lone_Pine_Koala_Sanctuary%2C_Queensland%2C_Australia%2C_koala%2C_2007.png/170px-A364%2C_Lone_Pine_Koala_Sanctuary%2C_Queensland%2C_Australia%2C_koala%2C_2007.png"
              alt="Spider man"
            />{" "}
          </a>
          <span>Kangaroo</span>
        </Animals>
      </AnimalsList>
    </Container>
  );
}

export default Home;
