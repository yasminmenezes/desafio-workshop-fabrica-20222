import RandomAnimal from "./cards"

const Gallery = () => {

    return (
        <>
            <div className="gallery">
                <article><RandomAnimal displayButton={false} /></article>
                <article><RandomAnimal displayButton={false} /></article>
                <article><RandomAnimal displayButton={false} /></article>
                <article><RandomAnimal displayButton={false} /></article>
                <article><RandomAnimal displayButton={false} /></article>
            </div>
        </>
    );

};

export default Gallery;