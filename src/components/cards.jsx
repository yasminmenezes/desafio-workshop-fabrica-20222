
const { useState, useEffect } = require("react");

function RandomAnimal() {
    const [animal, setAnimal] = useState("animal cards here");

    useEffect(() => {getCard();}, []);

    const getCard = async () => {
        const response = await fetch("https://zoo-animal-api.herokuapp.com/animals/rand", 
        {method: "GET", headers: {Accept: "application/json",},});
        const data = await response.json();
        
        setAnimal(data);
    };

    return (
        <>
            <div className="containerCard">
                <img className="imgCard" src={animal.image_link} alt={animal.name}/>
            </div>
            <div>
                <h1>{animal.name}</h1>
            </div>
            <div>
                <ul>
                    <li>Latin name: {animal.latin_name}</li>
                    <li>Natural Habitat: {animal.habitat}</li>
                    <li>Diet: {animal.diet}</li>
                    <li>Where can you find it? {animal.geo_range}</li>
                </ul>
            </div>
            <button type="button" className="btn" onClick={getCard}>Get another animal</button>
        </>
    );
};

export default RandomAnimal;
