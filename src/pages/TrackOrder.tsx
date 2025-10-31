import { Navigation } from "@/components/Navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import { Package, Clock, CheckCircle, Truck } from "lucide-react";

interface Order {
  id: string;
  customer_name: string;
  customer_phone: string;
  status: string;
  total_amount: number;
  created_at: string;
  order_items: Array<{
    menu_item_name: string;
    quantity: number;
    price: number;
  }>;
}

const TrackOrder = () => {
  const [phone, setPhone] = useState("");
  const [order, setOrder] = useState<Order | null>(null);
  const [loading, setLoading] = useState(false);

  const trackOrder = async () => {
    if (!phone) {
      toast.error("Please enter your phone number");
      return;
    }

    setLoading(true);
    try {
      const { data, error } = await supabase
        .from("orders")
        .select("*, order_items(menu_item_name, quantity, price)")
        .eq("customer_phone", phone)
        .order("created_at", { ascending: false })
        .limit(1)
        .maybeSingle();

      if (error) throw error;

      if (data) {
        setOrder(data as Order);
      } else {
        toast.error("No order found with this phone number");
        setOrder(null);
      }
    } catch (error) {
      console.error("Error tracking order:", error);
      toast.error("Failed to track order");
    } finally {
      setLoading(false);
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "pending":
        return <Clock className="h-5 w-5" />;
      case "preparing":
        return <Package className="h-5 w-5" />;
      case "ready":
        return <CheckCircle className="h-5 w-5" />;
      case "completed":
        return <Truck className="h-5 w-5" />;
      default:
        return <Clock className="h-5 w-5" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "pending":
        return "secondary";
      case "preparing":
        return "default";
      case "ready":
        return "default";
      case "completed":
        return "default";
      default:
        return "secondary";
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-24">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold mb-4 text-foreground">Track Your Order</h1>
            <p className="text-xl text-muted-foreground">Enter your phone number to check your order status</p>
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Find Your Order</CardTitle>
              <CardDescription>Enter the phone number you used when placing the order</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex gap-4">
                <Input
                  placeholder="Phone number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && trackOrder()}
                />
                <Button onClick={trackOrder} disabled={loading}>
                  {loading ? "Searching..." : "Track Order"}
                </Button>
              </div>
            </CardContent>
          </Card>

          {order && (
            <Card>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Order #{order.id.slice(0, 8)}</CardTitle>
                    <CardDescription>
                      Placed on {new Date(order.created_at).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                        hour: "2-digit",
                        minute: "2-digit"
                      })}
                    </CardDescription>
                  </div>
                  <Badge variant={getStatusColor(order.status)} className="flex items-center gap-2">
                    {getStatusIcon(order.status)}
                    {order.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold mb-2">Order Items</h3>
                    <div className="space-y-2">
                      {order.order_items.map((item, index) => (
                        <div key={index} className="flex justify-between text-sm">
                          <span>
                            {item.quantity}x {item.menu_item_name}
                          </span>
                          <span className="text-muted-foreground">
                            ₽{(item.price * item.quantity * 80).toFixed(0)}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t">
                    <div className="flex justify-between font-semibold text-lg">
                      <span>Total</span>
                      <span className="text-primary">₽{(order.total_amount * 80).toFixed(0)}</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t">
                    <h3 className="font-semibold mb-2">Delivery Information</h3>
                    <p className="text-sm text-muted-foreground">
                      {order.customer_name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {order.customer_phone}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
};

export default TrackOrder;
