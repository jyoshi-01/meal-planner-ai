import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, age, height, weight, gender, goal, activity, preferences } = body;

    // TODO: Replace with actual database save
    // For now, this is a mock implementation
    if (name && age && height && weight) {
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 500));

      return NextResponse.json(
        {
          success: true,
          message: 'Onboarding data saved',
          user: {
            name,
            age,
            height,
            weight,
            gender,
            goal,
            activity,
            preferences,
          },
        },
        { status: 201 }
      );
    }

    return NextResponse.json(
      { success: false, message: 'Missing required fields' },
      { status: 400 }
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Server error' },
      { status: 500 }
    );
  }
}


