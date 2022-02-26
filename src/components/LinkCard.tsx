import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import type { FC } from "react";
import styled from "styled-components";
import colors from "styles/colors";
import Avatar from "components/Avatar";
import { FileLists } from "types/fileList";
import {
  differenceInDays,
  differenceInHours,
  differenceInMinutes,
} from "date-fns";

interface LinkCardProps {
  fileList: FileLists;
}

const LinkCard = ({ fileList }: LinkCardProps) => {
  const [유효시간, 유효시간설정] = useState<number | string>();

  const isExistDownload = fileList.download_count > 0;

  const navigate = useNavigate();
  const goToDetail = () => {
    navigate(`/detailpage/${fileList.key}`);
  };

  const getExpiredTime = () => {
    const currentDate = new Date();
    const expiresDate = new Date(fileList.expires_at * 1000);
    const calExpiredDate = differenceInDays(expiresDate, currentDate);
    const calExpiredHours = differenceInHours(expiresDate, currentDate);
    const calExpiredMinutes = differenceInMinutes(expiresDate, currentDate);
    if (Number(calExpiredHours) >= 48) {
      유효시간설정(`${calExpiredDate}일`);
    } else if (Number(calExpiredHours) > 0 && Number(calExpiredHours) < 48) {
      setInterval(function () {
        유효시간설정(`${calExpiredHours}시간${calExpiredMinutes}분`);
      }, 60000);
    } else {
      유효시간설정("만료됨");
    }
  };

  useEffect(() => {
    getExpiredTime();
  }, [유효시간]);

  return (
    <TableRow>
      <TableCell>
        <LinkInfo>
          <LinkImage>
            <img referrerPolicy="no-referrer" src="/svgs/default.svg" alt="" />
          </LinkImage>
          <LinkTexts>
            <LinkTitle>{fileList.summary}</LinkTitle>
            <LinkUrl onClick={goToDetail}>
              {유효시간 ? fileList.summary : "만료됨"}
            </LinkUrl>
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
        <span>{유효시간}</span>
      </TableCell>
      <TableCell>
        <span>받은사람</span>
        <LinkReceivers>
          {isExistDownload && <Avatar text="recruit@estmob.com" />}
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
