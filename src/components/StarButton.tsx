import { useAuth } from "@clerk/nextjs";
import { Id } from "../../convex/_generated/dataModel";
import { use } from "react";
import { useMutation, useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { Star } from "lucide-react";

function StarButton({snippetId}:{snippetId: Id<"snippets">}){
    const {isSignedIn} = useAuth();
    const isStarred = useQuery(api.snippets.isSnippetStarred, {snippetId});
    const starCount = useQuery(api.snippets.getSnippetStarCount, {snippetId});
    const star = useMutation(api.snippets.starSnippet);

const handleStar = async () => {
    if (!isSignedIn) {
        return;
    }
    await star({ snippetId });
};

return (
        <button
            className={`group flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all duration-200
                ${
                    isStarred
                        ? "bg-yellow-500/10 text-yellow-500 hover:bg-yellow-500/20"
                        : "bg-gray-500/10 text-gray-400 hover:bg-yellow-500/10 hover:text-yellow-400"
                }
            `}
            onClick={handleStar}
            disabled={!isSignedIn}
        >
            <Star
                    className={`w-4 h-4 ${isStarred ? "fill-yellow-500" : "fill-none group-hover:fill-gray-400"}`}/>
            <span className={`text-sm font-medium ${isStarred ? "text-yellow-500" : "text-gray-400"}`}>
            {starCount}
            </span>
                    
        </button>
    );
}

export default StarButton;