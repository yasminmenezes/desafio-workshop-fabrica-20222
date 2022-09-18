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
                <div className="left">
                    <h1>{animal.name}</h1>
                    <img className="imgCard" src={animal.image_link} alt={animal.name}/>
                </div>
                <div className="right">
                    <ul>
                        <div className="info">
                            <li><b>Latin name:</b></li>
                            {animal.latin_name}
                        </div>
                        <div className="info">
                            <li><b>Natural Habitat:</b></li>
                            {animal.habitat}
                        </div>
                        <div className="info">
                            <li><b>Diet:</b></li>
                            {animal.diet}
                        </div>
                        <div className="info">
                            <li><b>It's from:</b></li>
                            {animal.geo_range}
                        </div>
                    </ul>
                    {shouldShowButton.displayButton && (<button type="button" className="btn" onClick={getCard}>Get another animal</button>)}
                </div>
            </div>
        </>
    );
};

export default RandomAnimal;
