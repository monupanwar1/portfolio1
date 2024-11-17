import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"


import { ArrowLeft } from 'lucide-react';

import { Button } from "@/components/ui/button"
import Link from "next/link";

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
                  
                <Button>
            <Link href="/" className="inline-flex items-center">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </Button>
                </CardFooter>
            </Card>




        </div>
    )
}