import { NextResponse } from 'next/server';

export async function GET() {
    try {
        const response = await fetch(`https://api.beehiiv.com/v2/publications/pub_${process.env.NEXT_PUBLIC_PUB_ID}/posts?platform=all&direction=desc`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${process.env.NEXT_PUBLIC_BEEHIV_APIKEY}`
            },
            cache: 'no-store'
        });

        if (!response.ok) {
            throw new Error('Failed to fetch posts');
        }

        const data = await response.json();

        return NextResponse.json({
            success: true,
            data
        });

    } catch (error) {
        return NextResponse.json(
            {
                success: false,
                error: error instanceof Error ? error.message : 'Failed to fetch posts'
            },
            { status: 500 }
        );
    }
}