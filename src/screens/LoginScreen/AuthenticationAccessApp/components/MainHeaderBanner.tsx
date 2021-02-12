import styled from "styled-components";

const BannerPrimary = styled.div`
  background-color: var(--primary-color);
  height: 330px;
  border-radius: 0 0 5% 5%;
`;

const ImageBanner = styled.img`
  width: 190px;
  height: 190px;
  object-fit: cover;
  margin: 20px auto 0;
  display: block;
  flex: none;
  border-radius: 100%;
`;

export default function MainHeaderBanner() {
  return (
    <BannerPrimary>
      <ImageBanner
        src="https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032__340.jpg"
      />
    </BannerPrimary>
  );
}
