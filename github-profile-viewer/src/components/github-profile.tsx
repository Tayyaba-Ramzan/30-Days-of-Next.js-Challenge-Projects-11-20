"use client";
import Image from "next/image";

import { useState } from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import Link from "next/link";
import {
  ExternalLinkIcon,
  ForkliftIcon,
  LocateIcon,
  RecycleIcon,
  StarIcon,
  UsersIcon,
} from "lucide-react";
import ClipLoader from "react-spinners/ClipLoader";

type UserProfile = {
  login: string;
  avatar_url: string;
  html_url: string;
  bio: string;
  followers: number;
  following: number;
  location: string;
};

type UserRepo = {
  id: number;
  name: string;
  html_url: string;
  description: string;
  stargazers_count: number;
  forks_count: number;
};

export default function GitHubProfileViewer() {
  const [username, setUsername] = useState<string>("");
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
  const [userRepos, setUserRepos] = useState<UserRepo[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);


  const fetchUserData = async (): Promise<void> => {
    setLoading(true);
    setError(null);
    try {
      const profileResponse = await fetch(
        `https://api.github.com/users/${username}`
      );
      if (!profileResponse.ok) {
        throw new Error("User not found");
      }
      const profileData = await profileResponse.json();
      const reposResponse = await fetch(
        `https://api.github.com/users/${username}/repos`
      );
      if (!reposResponse.ok) {
        throw new Error("Repositories not found");
      }
      const reposData = await reposResponse.json();
      setUserProfile(profileData);
      setUserRepos(reposData);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    fetchUserData();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black py-8">
      <Card className="w-full max-w-3xl p-6 space-y-4 shadow-xl rounded-lg bg-white">
        <div className="flex items-center justify-center">
          <Image
            src={"/git.webp"}
            alt="git-image"
            width={300}
            height={300}
            className="rounded-full shadow-lg"
          />
        </div>
        <CardHeader className="text-center">
          <CardTitle className="text-4xl font-extrabold mb-4 text-gray-800">
            GitHub Profile Viewer
          </CardTitle>
          <CardDescription className="text-gray-600 text-lg font-medium">
            Embark on a journey through GitHub by searching for any username and discover their unique profile and repositories.
            Unlock the code universe and explore like never before.
            Try searching for: <span className="font-bold italic underline">Tayyaba-Ramzan</span> and see the magic unfold!
          </CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit} className="mb-8 px-6">
          <div className="flex items-center gap-4">
            <Input
              type="text"
              placeholder="Enter a GitHub username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="flex-1 border rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Button
              type="submit"
              disabled={loading}
              className="px-6 py-3 bg-black text-white rounded-md hover:bg-gray-900 transition duration-300"
            >
              {loading ? <ClipLoader className="w-5 h-5 text-white" /> : "Search"}
            </Button>
          </div>
        </form>
        {error && <p className="text-red-500 text-center text-lg font-semibold">{error}</p>}
        {userProfile && (
          <div className="grid gap-8 px-6">
            <div className="grid md:grid-cols-[120px_1fr] gap-6">
              <Avatar className="w-32 h-32 border-4 border-gray-200 shadow-lg rounded-full">
                <AvatarImage src={userProfile.avatar_url} />
                <AvatarFallback>
                  {userProfile.login.charAt(0).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <div className="grid gap-2">
                <div className="flex items-center gap-2">
                  <h2 className="text-3xl font-bold text-gray-800">{userProfile.login}</h2>
                  <Link
                    href={userProfile.html_url}
                    target="_blank"
                    className="text-black hover:text-blue-500"
                    prefetch={false}
                  >
                    <ExternalLinkIcon className="w-5 h-5" />
                  </Link>
                </div>
                <p className="text-gray-700">{userProfile.bio}</p>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <UsersIcon className="w-4 h-4" />
                    <span>{userProfile.followers} Followers</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <UsersIcon className="w-4 h-4" />
                    <span>{userProfile.following} Following</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <LocateIcon className="w-4 h-4" />
                    <span>{userProfile.location || "N/A"}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid gap-6">
              <h3 className="text-2xl font-bold text-gray-800">Repositories</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
                {userRepos.map((repo) => (
                  <Card
                    key={repo.id}
                    className="shadow-lg rounded-lg bg-white border-2 border-gray-200"
                  >
                    <CardHeader>
                      <div className="flex items-center gap-2">
                        <RecycleIcon className="w-6 h-6 text-gray-600" />
                        <CardTitle>
                          <Link
                            href={repo.html_url}
                            target="_blank"
                            className="hover:text-blue-500"
                            prefetch={false}
                          >
                            {repo.name}
                          </Link>
                        </CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">{repo.description || "No description"}</p>
                    </CardContent>
                    <CardFooter className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <StarIcon className="w-4 h-4" />
                        <span>{repo.stargazers_count}</span>
                        <ForkliftIcon className="w-4 h-4" />
                        <span>{repo.forks_count}</span>
                      </div>
                      <Link
                        href={repo.html_url}
                        target="_blank"
                        className="text-black hover:underline"
                        prefetch={false}
                      >
                        View on GitHub
                      </Link>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        )}
      </Card>
    </div>

  );
}