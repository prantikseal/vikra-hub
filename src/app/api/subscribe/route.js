import { NextResponse } from 'next/server';

export async function POST(request) {
    try {
        const { email } = await request.json();

        const response = await fetch(`https://api.beehiiv.com/v2/publications/pub_${process.env.NEXT_PUBLIC_PUB_ID}/subscriptions`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.NEXT_PUBLIC_BEEHIV_APIKEY}`
            },
            body: JSON.stringify({
                email: email,
                reactivate_existing: false,
                send_welcome_email: true,
                referring_site: 'readcognition.com'
            }),
            cache: 'no-store'
        });

        if (!response.ok) {
            throw new Error('Subscription failed');
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
                error: error instanceof Error ? error.message : 'Something went wrong'
            },
            { status: 500 }
        );
    }
}