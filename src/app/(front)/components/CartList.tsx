'use client'

import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useCartStore } from "@/lib/cart-store"
import { Trash } from "lucide-react";

export default function CartList() {

    const items = useCartStore((state) => state.items);
    const removeItem = useCartStore((state) => state.removeItem);
    const clearCart = useCartStore((state) => state.clearCart);
    const totalPrice = useCartStore((state) => state.totalPrice());

    if (items.length === 0) {
        return (
           <div className="text-center mt-20">
            สินค้าในตะกร้าสินค้าไม่มี กรุณาเพิ่มสินค้าก่อน
           </div>
        )
    }

    return (
        <div className="max-auto max-w-4xl mt-20">
            <h1 className="text-xl mb-4">ตะกร้าสินค้า</h1>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>รหัสสินค้า</TableHead>
                        <TableHead>ชื่อสินค้า</TableHead>
                        <TableHead>ราคา</TableHead>
                        <TableHead>จำนวน</TableHead>
                        <TableHead>รวม</TableHead>
                        <TableHead>เครื่องมือ</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                    items.map((i) => (
                        <TableRow key={i.productId}>
                            <TableCell>{i.productId}</TableCell>
                            <TableCell>{i.title}</TableCell>
                            <TableCell>{i.price}</TableCell>
                            <TableCell>{i.qty}</TableCell>
                            <TableCell>{(i.price * i.qty).toFixed(2)}</TableCell>
                            <TableCell>
                                <Button variant="destructive" onClick={() => {removeItem(i.productId)}}>
                                    <Trash />
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))
                    }
                </TableBody>
            </Table>
            <div className="text-right mt-5">
                    รวมทั้งหมด: {totalPrice.toFixed(2)} บาท
            </div>
            <div>
                <Button onClick={() => clearCart()} className="mt-5">
                    ล้างตะกร้าสินค้า
                </Button>
            </div>
        </div>
        
    )
}