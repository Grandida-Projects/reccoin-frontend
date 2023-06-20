import Header from './../components/navigation/Header';
import { BlogSection1, TitleBar, BlogSection2, BlogPagination } from "./../components/blog/index";
import Newsletter from './../components/blog/newsletter';
import HomeFooter from './../components/homepage_components/HomeFooter';
import Footer from './../components/footer';


const Blog = () => {
  return (
    <>
      <Header />
      <div className="w-full h-full mt-40 md:mt-20 bg-bg-color md:py-[129px]">
        <BlogSection1 />
      </div>
      <TitleBar />
      <BlogSection2 />
      <BlogPagination />
      <Newsletter />
      <HomeFooter />
      <Footer />
    </>
  );
}

export default Blog