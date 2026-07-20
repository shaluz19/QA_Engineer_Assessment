import { test, expect } from '@playwright/test';
import { API_BASE_URL } from '../../utils/testData';
import { headers } from '../../utils/apiClient';

test.describe.serial('Todoist Task CRUD API', () => {

    let taskId = '';

    test('Create Task', async ({ request }) => {
        const response = await request.post(
            `${API_BASE_URL}/tasks`,
            {
                headers,
                data: {
                    content: `API Task ${Date.now()}`
                }
            }
        );

        expect(response.status()).toBe(200);

        const body = await response.json();

        taskId = body.id;

        expect(body.id).toBeTruthy();
        expect(body.content).toContain('API Task');

        console.log("Task ID:", taskId);
    });

    test('Get Task', async ({ request }) => {

    const response = await request.get(
        `${API_BASE_URL}/tasks/${taskId}`,
        {
            headers
        }
    );

    expect(response.status()).toBe(200);

    const body = await response.json();

    expect(body.id).toBe(taskId);
    expect(body.content).toContain('API Task');

    console.log(body);

    });

    test('Update Task', async ({ request }) => {

    const updatedTask = `Updated API Task ${Date.now()}`;

    const response = await request.post(
        `${API_BASE_URL}/tasks/${taskId}`,
        {
            headers,
            data: {
                content: updatedTask
            }
        }
    );

    expect(response.status()).toBe(200);

    // Verify by fetching the task again
    const getResponse = await request.get(
        `${API_BASE_URL}/tasks/${taskId}`,
        {
            headers
        }
    );

    expect(getResponse.status()).toBe(200);

    const body = await getResponse.json();

    expect(body.content).toBe(updatedTask);

    });

    test('Delete Task', async ({ request }) => {

    const response = await request.delete(
        `${API_BASE_URL}/tasks/${taskId}`,
        {
            headers
        }
    );

    expect(response.status()).toBe(204);

    });

});