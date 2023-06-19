import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Terms = () => {
    return (
        <Container>
            <h3>Terms and conditions</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti asperiores nemo dolorem error, molestiae laborum vitae sequi labore reiciendis sapiente perspiciatis sit corrupti repellat mollitia, id eum cupiditate explicabo provident sunt molestias hic? Similique nam aliquam, culpa tempore laborum sequi ea cum suscipit aspernatur architecto, esse voluptatem consequuntur necessitatibus quis quidem soluta eius inventore voluptates debitis impedit, omnis nobis ratione. Recusandae repellat obcaecati nam perspiciatis nulla, numquam magnam distinctio quibusdam a. Rem qui id cum nihil, neque ipsum voluptates itaque consequuntur ex voluptatem possimus, est, numquam in perferendis. Reprehenderit deserunt inventore illo, commodi tempore sed quaerat aperiam architecto aspernatur? Facere!</p>
            <p>Go back to <Link to='/register'>register</Link></p>
        </Container>
    );
};

export default Terms;