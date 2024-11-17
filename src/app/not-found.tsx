import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

import { Button } from "@/components/ui/button"

export default function NotFound() {
    return (
        <div className=" bg-background items-center justify-center flex   min-h-screen">
            <Card className="w-full max-w-md">
                <CardHeader >
                    <CardTitle className="justify-center font-bold flex items-center text-4xl">404</CardTitle>
                  
                </CardHeader>
                <CardContent>
                <p className="text-center  text-muted-foreground"> Oops! The page you&apos;re looking for doesn&apos;t exist.</p>
                </CardContent>
                <CardFooter className="flex justify-center">
                  
            <Button>Go To Home</Button>
                </CardFooter>
            </Card>




        </div>
    )
}