import PropTypes from "prop-types";
import styled from "styled-components";
import Loader from "Components/Loader";
import Message from "Components/Message";
import DetailPosting from "Components/DetailPosting";

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: white;
  border-radius: 30px;
`;

const DetailPresenter = ({
  type,
  postingDetail,
  comments,
  recommend,
  loading,
  error,
}) => {
  return loading ? (
    <Loader />
  ) : error ? (
    error && <Message color="#D3D3D3" text={error} />
  ) : (
    <Container>
      {postingDetail?.length && (
        <DetailPosting
          key={postingDetail[0].Contents_id}
          type={type}
          photoImg={postingDetail[0]["GROUP_CONCAT(Image.Image SEPARATOR ',')"]}
          audioImg={postingDetail[0].Album_image}
          audio={postingDetail[0].Audio}
          video={postingDetail[0].Video}
          blogImg={postingDetail[0].Background_image}
          avatar={postingDetail[0].image}
          writer={postingDetail[0].User_name}
          blue={postingDetail[0].Blue}
          title={postingDetail[0].Title}
          body={postingDetail[0].Contents}
          views={postingDetail[0].Views}
          likes={postingDetail[0].Likes}
          date={postingDetail[0].Date}
          comments={comments}
          recommend={recommend}
        />
      )}
    </Container>
  );
};

DetailPresenter.propTypes = {
  type: PropTypes.number,
  postingDetail: PropTypes.array,
  recommend: PropTypes.array,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default DetailPresenter;
