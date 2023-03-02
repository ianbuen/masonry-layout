import "./MasonryLayout.sass";

export const MasonryLayout = ({ data }) => {
  return <div className="MasonryLayout">
    {data.map(({ title, image, text }) =>
        <div className="Card" data-count={data.length} >
            <div className="Image" style={{background: image}}></div>
            <h1 className="Title">{title}</h1>
            <p className="Text">{text}</p>
        </div>
    )}
  </div>;
};

const randomLengthText = () => {
    let text = "The quick brown fox jumps over the lazy dog. ";

    for (var i = 0; i < Math.floor((Math.random() * 4)); i++) {
         text += text;
    }
         
    return text;
};

export const data = [
  {
    title: "The Big Black Jet",
    image: "#556699",
    text: randomLengthText(),
  },
  {
    title: "Yummy Borgir",
    image: "#996699",
    text: randomLengthText(),
  },
  {
    title: "That One Artist",
    image: "#ffffcc",
    text: randomLengthText(),
  },
  {
    title: "That One Artist",
    image: "#2222dd",
    text: randomLengthText(),
  },
  {
    title: "That One Artist",
    image: "#55ff33",
    text: randomLengthText(),
  },
  {
    title: "That One Artist",
    image: "#233333",
    text: randomLengthText(),
  },
  {
    title: "That One Artist",
    image: "#8723fc",
    text: randomLengthText(),
  },
  {
    title: "That One Artist",
    image: "#439878",
    text: randomLengthText(),
  },
  {
    title: "That One Artist",
    image: "#55ffcc",
    text: randomLengthText(),
  },
];
