import SectionTitle from "../../../Section/SectionTitle";
import featured from "../../../../../src/assets/home/featured.jpg"
import './Featured.css'


const Featured = () => {
    return (
        <div  className="featured-item bg-fixed text-white pt-8 my-10">
            <SectionTitle
            subHeading={"Check it out"}
            heading={"Featured item"} 
            ></SectionTitle>
            <div className="md:flex justify-center items-center px-36 pb-20 pt-12">
            <div>
                <img src= {featured} alt="" />
            </div>
            <div className="md: ml-10">
                <p>Aug 29, 2029</p>
                <p className="uppercase">where can i get some?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor cupiditate pariatur, ea corporis rem aut totam iste autem praesentium nam, voluptatem, sed soluta velit tempore rerum molestiae minus. Repellendus optio cumque, fuga nisi libero dolorem soluta ullam maxime, quidem iste debitis error dolorum. Quibusdam hic possimus enim? Error, saepe laborum!</p>
                <button className="btn btn-outline border-0 border-b-4 text-white mt-4">Order Now</button>
            </div>

            </div>
        </div>
    );
};

export default Featured;