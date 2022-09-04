
export default function GetStars({documents}) {
 let stars = [];
 for (let i = 0; i < documents.rating; i++) {
   stars.push(i);
 }
 return (
   <div className="ratings">
     {stars.map((index) => (
       <img
         src={process.env.PUBLIC_URL + "/images/star.png"}
         key={index}
         alt="product star ratings icon"
         className="star"
       />
     ))}
     <p>{documents.rating}</p>
   </div>
 ); 
}
