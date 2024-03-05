import { useCallback, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

type Props = {
  localeDataLength: number;
};

export const useProgressBarData = ({ localeDataLength }: Props) => {
  const navigateTo = useNavigate();
  const { id } = useParams<{ id?: string }>();

  const [currentPage, setCurrentPage] = useState<number>(
    parseInt(id || "1") || 1
  );
  const [progress, setProgress] = useState<number>(
    ((parseInt(id || "1") || 1) / localeDataLength) * 100
  );

  useEffect(() => {
    setCurrentPage(parseInt(id || "1") || 1);
    setProgress(((parseInt(id || "1") || 1) / localeDataLength) * 100);
  }, [id, localeDataLength]);

  const goToPreviousPage = useCallback(() => {
    const newPage = currentPage > 1 ? currentPage - 1 : 1;

    setCurrentPage(newPage);
    setProgress((newPage / localeDataLength) * 100 + 1);

    navigateTo(`/quiz/${newPage}`);
  }, [currentPage, localeDataLength, navigateTo]);

  return { progress, goToPreviousPage, currentPage };
};
