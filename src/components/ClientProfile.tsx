import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Textarea } from "./ui/textarea";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "./ui/table";
import { Phone, Mail, Calendar, Euro, MessageSquare, Send } from "lucide-react";
import { useState } from "react";

const clientData = {
  name: "Ana Gomez",
  email: "ana.gomez@email.com",
  phone: "+34 900 123 456",
  memberSince: "2023-01-15",
  totalSpent: "€1250.50",
  purchases: [
    {
      id: 1,
      product: "Curso React Avanzado",
      date: "2023-02-10",
      amount: "€500",
      status: "entregado",
      delivery: "inmediato",
      notes: "Cliente muy satisfecho"
    },
    {
      id: 2,
      product: "Soporte técnico anual",
      date: "2023-04-05",
      amount: "€750.5",
      status: "pendiente",
      delivery: "pendiente",
      notes: "Aplicar descuento por renovación"
    }
  ]
};

export function ClientProfile() {
  const [internalNote, setInternalNote] = useState("");
  const [publishedNotes, setPublishedNotes] = useState([
    "Cliente VIP, siempre compra cursos anuales."
  ]);

  const handlePublishNote = () => {
    if (internalNote.trim()) {
      setPublishedNotes([...publishedNotes, internalNote]);
      setInternalNote("");
    }
  };

  return (
    <div className="flex-1 p-6 space-y-6 bg-background">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl text-foreground">{clientData.name}</h2>
          <p className="text-muted-foreground">{clientData.email}</p>
        </div>
        <Button variant="outline" className="gap-2">
          <MessageSquare className="h-4 w-4" />
          Volver
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Contact Information */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Phone className="h-5 w-5" />
              Información de Contacto
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-2 text-sm">
              <Phone className="h-4 w-4 text-muted-foreground" />
              <span>{clientData.phone}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Mail className="h-4 w-4 text-muted-foreground" />
              <span>{clientData.email}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Calendar className="h-4 w-4 text-muted-foreground" />
              <span>Miembro desde: {new Date(clientData.memberSince).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <Euro className="h-4 w-4 text-muted-foreground" />
              <span>Gasto total: {clientData.totalSpent}</span>
            </div>
          </CardContent>
        </Card>

        {/* Purchase History */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Historial de compras</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Producto</TableHead>
                  <TableHead>Fecha</TableHead>
                  <TableHead>Importe</TableHead>
                  <TableHead>Pago</TableHead>
                  <TableHead>Entrega</TableHead>
                  <TableHead>Nota Detalle</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {clientData.purchases.map((purchase) => (
                  <TableRow key={purchase.id}>
                    <TableCell>{purchase.product}</TableCell>
                    <TableCell>{new Date(purchase.date).toLocaleDateString()}</TableCell>
                    <TableCell>{purchase.amount}</TableCell>
                    <TableCell>
                      <Badge 
                        variant={purchase.status === "entregado" ? "default" : "secondary"}
                        className={purchase.status === "entregado" ? "bg-green-100 text-green-800" : ""}
                      >
                        {purchase.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge 
                        variant={purchase.delivery === "inmediato" ? "default" : "secondary"}
                        className={purchase.delivery === "inmediato" ? "bg-blue-100 text-blue-800" : ""}
                      >
                        {purchase.delivery}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-sm text-muted-foreground">{purchase.notes}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>

      {/* Internal Notes */}
      <Card>
        <CardHeader>
          <CardTitle>Notas internas</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Textarea
              placeholder="Cliente VIP, siempre compra cursos anuales."
              value={internalNote}
              onChange={(e) => setInternalNote(e.target.value)}
              className="min-h-[100px]"
            />
            <div className="flex justify-end">
              <Button onClick={handlePublishNote} className="gap-2">
                <Send className="h-4 w-4" />
                Publicar
              </Button>
            </div>
          </div>

          {/* Published Notes */}
          {publishedNotes.length > 0 && (
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <MessageSquare className="h-4 w-4 text-destructive" />
                <span className="text-sm">Nota publicada</span>
                <Badge variant="destructive" className="text-xs px-2 py-0.5">
                  {publishedNotes.length}
                </Badge>
              </div>
              <div className="space-y-2">
                {publishedNotes.map((note, index) => (
                  <div key={index} className="text-sm text-muted-foreground bg-muted p-3 rounded-md">
                    {note}
                  </div>
                ))}
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}