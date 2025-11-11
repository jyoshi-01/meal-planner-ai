import { NextRequest, NextResponse } from 'next/server';
import { getMealPlans } from '@/lib/ai';

export async function GET(request: NextRequest) {
  try {
    // TODO: Replace with actual database query
    // For now, using mock data from ai.ts
    const mealPlans = await getMealPlans();

    return NextResponse.json(
      { success: true, data: mealPlans },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Failed to fetch meal plans' },
      { status: 500 }
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // TODO: Replace with actual database save
    // For now, this is a mock implementation
    return NextResponse.json(
      { success: true, message: 'Meal plan created', data: body },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Failed to create meal plan' },
      { status: 500 }
    );
  }
}


