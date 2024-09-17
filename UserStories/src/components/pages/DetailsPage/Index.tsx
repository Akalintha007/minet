import BookDetails from "../../organisms/BookDetails";
import BookGrid from "../../organisms/BooksGrid";
import Footer from "../../organisms/Footer/Index";
import Header from "../../organisms/Header";

const BookDetailsPage = () => {
  const book = {
    id: "",
    img: "",
    title: "",
    author: "",
    reads: "",
  };
  return (
    <div>
      <Header />
      <BookDetails id={""} img={""} title={""} author={""} reads={""} tagLine={""}/>
      <BookGrid books={[]} />
      <Footer />
    </div>
  );
};

export default BookDetailsPage;
