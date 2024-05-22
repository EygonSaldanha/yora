import dayjs from "dayjs";
import { TableCell } from "./table-cell";
import { TableHeader } from "./table-header";
import { TableRow } from "./table-row";
import { IconButton } from "../icon-button";
import {
  ChevronLeft,
  ChevronRight,
  ChevronsLeft,
  ChevronsRight,
  MoreHorizontal,
} from "lucide-react";
import { Table } from "./table";
interface table {
  values: any[];
  page: number;
  total: number;
  totalPages: number;
  setCurrentPage: (page: number) => void;
}
export function DefaultTable({
  values,
  page,
  total,
  totalPages,
  setCurrentPage,
}: table) {
  function goToFirstPage() {
    setCurrentPage(1);
  }

  function goToLastPage() {
    setCurrentPage(totalPages);
  }

  function goToPreviousPage() {
    setCurrentPage(page - 1);
  }

  function goToNextPage() {
    setCurrentPage(page + 1);
  }
  return (
    <Table>
      <thead>
        <tr className="border-b border-white/10">
          <TableHeader style={{ width: 48 }}>
            <input
              type="checkbox"
              className="size-4 bg-black/20 rounded border border-white/10"
            />
          </TableHeader>
          <TableHeader>Código</TableHeader>
          <TableHeader>Participante</TableHeader>
          <TableHeader>Data de inscrição</TableHeader>
          <TableHeader>Data do check-in</TableHeader>
          <TableHeader style={{ width: 64 }}></TableHeader>
        </tr>
      </thead>
      <tbody>
        {/* TODO: Tornar a tabela algo mais dinâmica */}
        {values.map((ateendee) => {
          return (
            <TableRow key={ateendee.id}>
              <TableCell>
                <input
                  type="checkbox"
                  className="size-4 bg-black/20 rounded border border-white/10"
                />
              </TableCell>
              <TableCell>{ateendee.id}</TableCell>
              <TableCell>
                <div className="flex flex-col gap-1">
                  <span className="font-semibold text-white">
                    {ateendee.name}
                  </span>
                  <span>{ateendee.email}</span>
                </div>
              </TableCell>
              <TableCell>{dayjs().to(ateendee.createdAt)}</TableCell>
              <TableCell>
                {ateendee.checkedInAt === null ? (
                  <span className="text-zinc-400">Não fez check-in</span>
                ) : (
                  dayjs().to(ateendee.checkedInAt)
                )}
              </TableCell>
              <TableCell>
                <IconButton
                  transparent
                  className="bg-black/20 border border-white/10 rounded-md p-1.5"
                >
                  <MoreHorizontal className="size-4" />
                </IconButton>
              </TableCell>
            </TableRow>
          );
        })}
      </tbody>
      <tfoot>
        <tr>
          <TableCell colSpan={3}>
            Mostrando {values.length} de {total} itens
          </TableCell>
          <TableCell className="text-right" colSpan={3}>
            <div className="inline-flex items-center gap-8">
              <span>
                Página {page} de {totalPages}
              </span>

              <div className="flex gap-1.5">
                <IconButton onClick={goToFirstPage} disabled={page === 1}>
                  <ChevronsLeft className="size-4" />
                </IconButton>
                <IconButton onClick={goToPreviousPage} disabled={page === 1}>
                  <ChevronLeft className="size-4" />
                </IconButton>
                <IconButton
                  onClick={goToNextPage}
                  disabled={page === totalPages}
                >
                  <ChevronRight className="size-4" />
                </IconButton>
                <IconButton
                  onClick={goToLastPage}
                  disabled={page === totalPages}
                >
                  <ChevronsRight className="size-4" />
                </IconButton>
              </div>
            </div>
          </TableCell>
        </tr>
      </tfoot>
    </Table>
  );
}
