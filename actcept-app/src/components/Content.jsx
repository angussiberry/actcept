import '../App.css';
import Card from './Card';
import Search from './Search';

function Content() {
  const cards =
    <>
      <Card
        title="Hello"
        img="https://cdn.pixabay.com/photo/2015/05/31/15/07/coffee-792113_960_720.jpg" />
      <Card
        title="this"
        img="https://cdn.pixabay.com/photo/2017/01/04/15/59/feather-1952382_960_720.jpg" />
      <Card
        title="is"
        img="https://cdn.pixabay.com/photo/2015/05/28/14/53/ux-788002_960_720.jpg" />
      <Card
        title="is"
        img="https://cdn.pixabay.com/photo/2015/05/28/14/53/ux-788002_960_720.jpg" />
      <Card
        title="is"
        img="https://cdn.pixabay.com/photo/2015/05/28/14/53/ux-788002_960_720.jpg" />
      <Card
        title="a"
        img="https://cdn.pixabay.com/photo/2018/01/03/05/33/the-sun-3057622_960_720.jpg" />
      <Card
        title="CARD"
        img="https://cdn.pixabay.com/photo/2019/05/10/20/11/roof-truss-4194408_960_720.jpg" />
    </>
  return (
    <div>
      <Search />
      <div className="card-deck">
        {cards}
      </div>
    </div>

  );
}

export default Content;
