


export default function Minicard({name, image, telefon}){
    return(
        <>
            <h4>{name}</h4>
            <img src={image} alt={name} />
            <p>{telefon}</p>
        </>
    )
};