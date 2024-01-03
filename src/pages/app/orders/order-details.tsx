import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const OrderDatails = () => {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Pedido: 764bb127-f978-454a-8ba0-f9dca6804639</DialogTitle>
        <DialogDescription>Detalhes do pedido</DialogDescription>
      </DialogHeader>

      <div className="space-y-6">
        <Table>
          <TableBody>
            <TableRow>
              <TableCell className="text-muted-foreground">Status</TableCell>
              <TableCell className="flex justify-end">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-slate-400"></span>
                  <span className="font-medium text-muted-foreground">
                    Pendente
                  </span>
                </div>
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="text-muted-foreground">Cliente</TableCell>
              <TableCell className="flex justify-end">
                Matheus Serafim
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="text-muted-foreground">Telefone</TableCell>
              <TableCell className="flex justify-end">
                (41) 9 9999-9999
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="text-muted-foreground">E-mail</TableCell>
              <TableCell className="flex justify-end">
                matheus18serafim@gmail.com
              </TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="text-muted-foreground">
                Realizado há
              </TableCell>
              <TableCell className="flex justify-end">1d</TableCell>
            </TableRow>
          </TableBody>
        </Table>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Produto</TableHead>
              <TableHead className="text-right">Qtd.</TableHead>
              <TableHead className="text-right">Preço</TableHead>
              <TableHead className="text-right">Subtotal</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            <TableRow>
              <TableCell className="font-medium">
                Pizza Pepperoni Família
              </TableCell>
              <TableCell className="text-right text-xs ">1</TableCell>
              <TableCell className="text-right text-xs ">R$ 149,90</TableCell>
              <TableCell className="text-right text-xs ">R$ 149,90</TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="font-medium">
                Pizza JackCowboy Grande
              </TableCell>
              <TableCell className="text-right text-xs ">1</TableCell>
              <TableCell className="text-right text-xs ">R$ 149,90</TableCell>
              <TableCell className="text-right text-xs ">R$ 149,90</TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="font-medium">
                Pizza Mussarela Broto
              </TableCell>
              <TableCell className="text-right text-xs ">1</TableCell>
              <TableCell className="text-right text-xs ">R$ 149,90</TableCell>
              <TableCell className="text-right text-xs ">R$ 149,90</TableCell>
            </TableRow>
          </TableBody>

          <TableFooter>
            <TableRow>
              <TableCell colSpan={3} className="font-medium">
                Total do pedido
              </TableCell>
              <TableCell className="text-right text-xs font-medium">
                R$ 449,70
              </TableCell>
            </TableRow>
          </TableFooter>
        </Table>
      </div>
    </DialogContent>
  );
};

export { OrderDatails };
