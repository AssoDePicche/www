"use client";

import { useEffect, useState } from "react";

import GitHubRepoItem from "@components/github";

import { type GitHubRepo, fetchUserRepositories } from "@lib/github";

export default function Page() {
  const [loading, setLoading] = useState(true);

  const [repositories, setRepositories] = useState<GitHubRepo[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      return fetchUserRepositories("AssoDePicche");
    };

    setLoading(true);

    fetchData().then(setRepositories).finally(() => setLoading(false));
  }, [fetchUserRepositories, setLoading, setRepositories]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex items-center font-sans w-full flex-col justify-center sm:items-start gap-6">
      <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-zinc-50">
        GitHub Repos.
      </h1>
      <ul>
      {repositories.map((repository, index) =>  (
        <li key={index} className="mb-4">
        <GitHubRepoItem
          name={repository.name}
          description={repository.description}
          url={repository.html_url}
          updatedAt={repository.updated_at}
          language={repository.language}
        />
        </li>
      ))}
      </ul>
    </div>
  );
}
