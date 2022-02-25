import React from "react";
import { useNavigate } from "react-router-dom";
import type { FC } from "react";
import styled from "styled-components";
import colors from "styles/colors";
import Avatar from "components/Avatar";
import { FileList } from "types/fileList";
import {
  differenceInDays,
  differenceInHours,
  differenceInMinutes,
  format,
} from "date-fns";

interface LinkCardProps {
  fileList: FileList;
}

const LinkCard = ({ fileList }: LinkCardProps) => {
  const navigate = useNavigate();
  const goToDetail = () => {
    navigate(`/detailpage/${fileList.key}`);
  };

  const current = new Date();
  const exdate = new Date(fileList.expires_at * 1000);
  console.log("test", differenceInDays(current, exdate));
  const expiredDate = differenceInDays(current, exdate);
  const expiredHours = differenceInHours(current, exdate);
  const expiredMinutes = differenceInMinutes(current, exdate);

  return (
    <TableRow onClick={goToDetail}>
      <TableCell>
        <LinkInfo>
          <LinkImage>
            <img referrerPolicy="no-referrer" src="/svgs/default.svg" alt="" />
          </LinkImage>
          <LinkTexts>
            <LinkTitle>로고파일</LinkTitle>
            <LinkUrl>{fileList.summary}</LinkUrl>
          </LinkTexts>
        </LinkInfo>
        <span />
      </TableCell>
      <TableCell>
        <span>파일개수</span>
        <span>{fileList.count}</span>
      </TableCell>
      <TableCell>
        <span>파일사이즈</span>
        <span>{fileList.size}KB</span>
      </TableCell>
      <TableCell>
        <span>유효기간</span>
        <span>
          {expiredDate >= 2
            ? `${expiredDate}일`
            : `${expiredHours}시간 ${expiredMinutes}분`}
        </span>
      </TableCell>
      <TableCell>
        <span>받은사람</span>
        <LinkReceivers>
          <Avatar text="recruit@estmob.com" />
        </LinkReceivers>
      </TableCell>
    </TableRow>
  );
};

export default LinkCard;

const TableRow = styled.tr`
  color: inherit;
  display: table-row;
  vertical-align: middle;
  outline: 0px;
  font-weight: inherit;
  font-size: inherit;
`;

const TableCell = styled.th`
  font-weight: inherit;
  font-size: inherit;
  font-size: 12px;
  line-height: 24px;
  display: table-cell;
  vertical-align: inherit;
  border-bottom: 1px solid ${colors.grey300};
  text-align: left;
  padding: 16px;
`;

const LinkInfo = styled.div`
  display: flex;
  align-items: center;
`;

const LinkImage = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    border-radius: 4px;
  }
`;

const LinkTexts = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 16px;

  & > * {
    margin: 0;
  }
`;

const LinkTitle = styled.p`
  font-size: 16px;
  font-weight: 500;
  color: ${colors.grey700};
`;

const LinkUrl = styled.a`
  text-decoration: underline;

  :hover {
    color: ${colors.teal700};
  }
`;

const LinkReceivers = styled.div`
  display: flex;

  & > * + * {
    margin-left: 8px;
  }
`;
