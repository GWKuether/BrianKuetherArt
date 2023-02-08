import "./HomePage.css"

const HomePage = (props) => {
  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <div>
          <p className="text-sizer">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            consectetur viverra tempor. Sed et sapien in dui imperdiet pretium.
            Suspendisse at blandit libero, ac dignissim mi. Duis non lacus leo.
            Donec nec nisi sit amet massa malesuada ultricies sit amet quis
            tellus. Mauris nisl nunc, efficitur eu urna et, gravida lobortis
            lectus. Curabitur ac fringilla sapien. Cras id lacus lorem. Cras et
            convallis lorem.
          </p>
        </div>
        <div>
          <img
            src={require("./Assets/brian kuether - Google Search.png")}
            alt="profile"
            className="image-sizer"
          ></img>
        </div>
      </div>
      <div style={{display:"flex", justifyContent: "space-around"}}>
        <div>
          <img 
          src={require("./Assets/IMG_0275.jpg")} 
          alt="profile two"
          className="image-sizer"
          ></img>
        </div>
        <div>
          <p className="text-sizer">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
            consectetur viverra tempor. Sed et sapien in dui imperdiet pretium.
            Suspendisse at blandit libero, ac dignissim mi. Duis non lacus leo.
            Donec nec nisi sit amet massa malesuada ultricies sit amet quis
            tellus. Mauris nisl nunc, efficitur eu urna et, gravida lobortis
            lectus. Curabitur ac fringilla sapien. Cras id lacus lorem. Cras et
            convallis lorem.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
