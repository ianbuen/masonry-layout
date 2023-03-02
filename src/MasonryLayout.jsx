import { useEffect, useState } from "react";
import "./MasonryLayout.sass"

export const MasonryLayout = ({ data }) => {

    const [intColumns, setColumns] = useState(1)
    const [arrColumns, setArrColumns] = useState(null);

    useEffect(() => {
        const updateMedia = () => {
            if (innerWidth < 720)
                setColumns(1);
            else if (innerWidth < 1080)
                setColumns(2);
            else
                setColumns(3);

            setArrColumns(Array(intColumns).fill([]));
            console.log(arrColumns);

            data.forEach((item, index) => {
                console.log(Card(item));
            });
        }

      updateMedia();

      window.addEventListener('resize', updateMedia);
    
      return () => window.removeEventListener('resize', updateMedia);
    }, []);

    return <div className="MasonryLayout">
        <p style={{color: "black", position: "absolute", top: 0, left: 0}}>{`${intColumns}`}</p>
        {data.map(item => Card(item))}
    </div>;
};

const Column = () => <div className="Column"></div>;

const Card = ({title, image, text}) =>
    <div className="Card" >
        <div className="Image" style={{background: image}}></div>
        <h1 className="Title">Color Hex {title}</h1>
        <p className="Text">{text}</p>
    </div>

const randomLengthText = () => {
    let text = "";

    for (var i = 0; i < Math.floor((Math.random() * 20)) + 1; i++) {
         text += "The quick brown fox jumps over the lazy dog. ";
    }
         
    return text;
};

const randomColor = () => {
    return `#${(Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0').toUpperCase()}`
};

export const data = [
  {
    title: randomColor(),
    image: randomColor(),
    text: randomLengthText(),
  },
  {
    title: randomColor(),
    image: randomColor(),
    text: randomLengthText(),
  },
  {
    title: randomColor(),
    image: randomColor(),
    text: randomLengthText(),
  },
  {
    title: randomColor(),
    image: randomColor(),
    text: randomLengthText(),
  },
  {
    title: randomColor(),
    image: randomColor(),
    text: randomLengthText(),
  },
  {
    title: randomColor(),
    image: randomColor(),
    text: randomLengthText(),
  },
  {
    title: randomColor(),
    image: randomColor(),
    text: randomLengthText(),
  },
  {
    title: randomColor(),
    image: randomColor(),
    text: randomLengthText(),
  },
  {
    title: randomColor(),
    image: randomColor(),
    text: randomLengthText(),
  },
];
