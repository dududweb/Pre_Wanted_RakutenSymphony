import React from "react";
import { getFileSize } from "utils/utils";
import { FileLists } from "types/fileList";
import styled from "styled-components";
import colors from "styles/colors";

interface DetailBodyProps {
  findLinkPage?: FileLists | undefined;
}

const DetailBody = ({ findLinkPage }: DetailBodyProps) => {
  const createdDate = new Date(findLinkPage?.created_at * 1000);
  const getCreadtedYear = createdDate.getFullYear();
  const getCreadteMonth = createdDate.getMonth() + 1;
  const getCreadteDay = createdDate.getDay();
  const getCreadteHours = createdDate.getHours();
  const getCreadteMinutes = createdDate.getMinutes();

  const getSize = getFileSize(findLinkPage?.size);

  return (
    <Article>
      <Descrition>
        <Texts>
          <Top>링크 생성일</Top>
          <Bottom>
            {`${getCreadtedYear}년 ${getCreadteMonth}월 ${getCreadteDay}일 ${getCreadteHours}:${getCreadteMinutes} +09:00`}
          </Bottom>
          <Top>메세지</Top>
          <Bottom>{findLinkPage?.sent.content}</Bottom>
          <Top>다운로드 횟수</Top>
          <Bottom>{findLinkPage?.download_count}</Bottom>
        </Texts>
        <LinkImage>
          <Image />
        </LinkImage>
      </Descrition>
      <ListSummary>
        <div>총 {findLinkPage?.count}개의 파일</div>
        <div>{getSize}</div>
      </ListSummary>
      <FileList>
        {findLinkPage?.files.map((items) => {
          return (
            <FileListItem key={items.key}>
              <FileItemInfo>
                <FileThumbnail thumbnailUrl={items.thumbnailUrl} />
                <span>{items.name}</span>
              </FileItemInfo>
              <FileItemSize>{getSize}</FileItemSize>
            </FileListItem>
          );
        })}
      </FileList>
    </Article>
  );
};

const Article = styled.article`
  border-radius: 4px;
  border-color: ${colors.grey200};
  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  box-shadow: 0 0 0 1px rgb(0 20 61 / 8%), 0 3px 3px 0 rgb(0 20 61 / 4%);
  background-color: ${colors.white};
  color: ${colors.grey600};
  font-size: 14px;
  font-weight: 400;
`;

const Descrition = styled.div`
  display: flex;
  padding: 36px;

  @media (max-width: 768px) {
    flex-direction: column-reverse;
    padding: 24px;
  }
`;

const Texts = styled.div`
  flex-grow: 0;
  max-width: 50%;
  flex-basis: 50%;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const Top = styled.label`
  font-weight: 600;
  line-height: 20px;
`;

const Bottom = styled.p`
  color: ${colors.grey700};
  margin: 8px 0 24px;
`;

const LinkImage = styled.div`
  flex-grow: 0;
  max-width: 50%;
  flex-basis: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  display: flex;
  overflow: hidden;
  align-items: center;
  border-radius: 4px;
  justify-content: center;
  background-color: ${colors.grey50};

  @media (max-width: 768px) {
    margin-bottom: 32px;
    max-width: 100%;
  }
`;

const Image = styled.span<{ thumbnailUrl?: string }>`
  width: 120px;
  display: inline-block;
  background-image: url("/svgs/adefltu.svg");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
  padding-bottom: 100%;
`;

const ListSummary = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 36px;
  font-weight: 600;
  border-top: 1px solid;
  border-color: ${colors.grey200};

  @media (max-width: 768px) {
    padding: 12px 24px;
  }
`;

const FileList = styled.ul`
  border-top: 1px solid;
  border-color: ${colors.grey200};
  padding: 0;
  margin: 0;
  padding: 0 36px;
  color: ${colors.grey700};

  @media (max-width: 768px) {
    padding: 0 24px;
  }

  & > li + li {
    border-top: 1px solid;
    border-color: ${colors.grey200};
  }
`;

const FileListItem = styled.li`
  height: 72px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FileItemInfo = styled.div`
  flex-grow: 0;
  max-width: 50%;
  flex-basis: 50%;
  display: flex;
  align-items: center;
`;

const FileThumbnail = styled.span<{ thumbnailUrl: string }>`
  width: 40px;
  height: 40px;
  margin-right: 12px;
  display: inline-block;
  background-image: url(/svgs/adefltu.svg);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center center;
`;

const FileItemSize = styled.div``;

export default DetailBody;
