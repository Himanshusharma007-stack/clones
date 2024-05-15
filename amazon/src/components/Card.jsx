export default function Card(props) {
  return (
    <>
      <div className="w-60 bg-white p-4">
        <h1 className="text-xl font-bold mb-4">{props.data.heading}</h1>
        <div className="grid grid-cols-2">
          <div>
            <img src={props.data.img1} />
            <p className="text-xs">{props.data.img1Name}</p>
          </div>
          <div>
            <img src={props.data.img2} />
            <p className="text-xs">{props.data.img2Name}</p>
          </div>
          <div>
            <img src={props.data.img3} />
            <p className="text-xs">{props.data.img3Name}</p>
          </div>
          <div>
            <img src={props.data.img4} />
            <p className="text-xs">{props.data.img4Name}</p>
          </div>
          <p className="text-sm my-2 text-sky-400">See more</p>
        </div>
      </div>
    </>
  );
}
