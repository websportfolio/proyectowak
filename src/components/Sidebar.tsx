import { 
  BarChart3, 
  ShoppingCart, 
  FileText, 
  Package, 
  TrendingUp, 
  Users, 
  Truck, 
  HeadphonesIcon, 
  Settings,
  LayoutDashboard
} from "lucide-react";
import { Button } from "./ui/button";
import { cn } from "./ui/utils";

interface SidebarProps {
  activeItem: string;
  onItemClick: (item: string) => void;
}

const menuItems = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'ventas', label: 'Ventas', icon: TrendingUp },
  { id: 'compras', label: 'Compras', icon: ShoppingCart },
  { id: 'facturacion', label: 'Facturación', icon: FileText },
  { id: 'inventario', label: 'Inventario', icon: Package },
  { id: 'reportes', label: 'Reportes', icon: BarChart3 },
  { id: 'clientes', label: 'Clientes', icon: Users },
  { id: 'proveedores', label: 'Proveedores', icon: Truck },
  { id: 'soporte', label: 'Soporte', icon: HeadphonesIcon },
  { id: 'configuracion', label: 'Configuración', icon: Settings },
];

export function Sidebar({ activeItem, onItemClick }: SidebarProps) {
  return (
    <div className="w-64 bg-card border-r border-border h-screen flex flex-col">
      <div className="p-6 border-b border-border">
        <h1 className="text-primary">TecnoComponents</h1>
      </div>
      
      <nav className="flex-1 p-4 space-y-1">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <Button
              key={item.id}
              variant={activeItem === item.id ? "secondary" : "ghost"}
              className={cn(
                "w-full justify-start gap-3 h-10",
                activeItem === item.id && "bg-primary/10 text-primary"
              )}
              onClick={() => onItemClick(item.id)}
            >
              <Icon className="h-4 w-4" />
              {item.label}
            </Button>
          );
        })}
      </nav>
    </div>
  );
}