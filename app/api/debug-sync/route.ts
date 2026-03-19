
import { syncUser } from "@/actions/user";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        console.log("[API] Triggering syncUser...");
        const result = await syncUser();
        return NextResponse.json({
            success: !!result,
            data: result,
            message: result ? "User synced successfully" : "User sync failed (returned null)"
        });
    } catch (error) {
        return NextResponse.json({
            success: false,
            error: error instanceof Error ? error.message : String(error)
        }, { status: 500 });
    }
}
