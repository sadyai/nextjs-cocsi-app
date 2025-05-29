'use client'

import { Table, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useCartStore } from "@/lib/cart-store"

export default function CartList() {

    const items = useCartStore((state) => state.items);
    const removeItem = useCartStore((state) => state.removeItem);
    const clearCart = useCartStore((state) => state.clearCart);
    const totalPrice = useCartStore((state) => state.totalPrice);


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
                    </TableRow>
                </TableHeader>
            </Table>
        </div>
    )
}