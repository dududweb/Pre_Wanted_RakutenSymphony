import React from "react";
import type { FC } from "react";
import useAxios from "hooks/useAxios";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import colors from "styles/colors";
import Button from "components/Button";
import { API } from "config";

import DetailBody from "./DetailBody";

const DetailPage: FC = () => {
  const url = `${API.linkList}`;
  const { data } = useAxios(url);
  const { linkDetailId } = useParams();

  const findLinkPage = data?.find((el) => el.key == linkDetailId);

  const handleDownload = () => {
    alert(`다운로드 되었습니다.`);
  };

  return (
    <>
      <Header>
        <LinkInfo>
          <Title>로고파일</Title>
          <Url>{findLinkPage?.thumbnailUrl}</Url>
        </LinkInfo>
        <DownloadButton onClick={handleDownload}>
          <img
            referrerPolicy="no-referrer"
            src="/svgs/download.svg"
            alt="다운로드이미지"
          />
          받기
        </DownloadButton>
      </Header>
      {findLinkPage && <DetailBody findLinkPage={findLinkPage} />}
    </>
  );
};

const Header = styled.header`
  display: flex;
  color: ${colors.grey600};
  margin-bottom: 32px;
`;

const LinkInfo = styled.div`
  overflow: hidden;
  flex-grow: 1;
`;

const Title = styled.h3`
  margin: 0;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  line-height: 28px;
  color: ${colors.grey700};
  font-size: 20px;
`;

const Url = styled.a`
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  cursor: pointer;
  text-decoration: underline;
  line-height: 20px;
  font-size: 14px;

  :hover {
    color: ${colors.teal700};
  }
`;

const DownloadButton = styled(Button)`
  font-size: 16px;

  img {
    margin-right: 8px;
  }
`;

export default DetailPage;
