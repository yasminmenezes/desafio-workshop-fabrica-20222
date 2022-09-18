
const { useState, useEffect } = require("react");

function RandomAnimal(shouldShowButton) {
    // console.log(shouldShowButton); shouldShowButton.displayButton para acessar o valor boolean
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
                <div className="right">
                    <h1>{animal.name}</h1>
                    <img className="imgCard" src={animal.image_link} alt={animal.name}/>
                </div>
                <div className="left">
                    <ul>
                        <li className="info"><b>Latin name: </b>{animal.latin_name}</li>
                        <li className="info"><b>Natural Habitat: </b>{animal.habitat}</li>
                        <li className="info"><b>Diet: </b>{animal.diet}</li>
                        <li className="info"><b>Where can you find it? </b>{animal.geo_range}</li>
                    </ul>
                    {shouldShowButton.displayButton && (<button type="button" className="btn" onClick={getCard}>Get another animal</button>)}
                </div>
            </div>
        </>
    );
};

export default RandomAnimal;
